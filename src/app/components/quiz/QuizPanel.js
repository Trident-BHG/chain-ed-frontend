import { Box, Flex, Button } from "@chakra-ui/react";
import { useRouter, useParams, usePathname } from "next/navigation";
import { useState } from "react";

import QuizQuestionPanel from "@/app/components/quiz/QuizQuestionPanel";
import QuizAnswerPanel from "@/app/components/quiz/QuizAnswerPanel";
import ArrowRight from "@/app/components/icons/ArrowRight";
import UserInputModal from "@/app/components/UserInputModal";
import CertificateModal from "@/app/components/CertificateModal";
import { createCertificate, downloadFile } from "@/app/lib/canvas/canvas";
import { sendFileToIPFS } from "@/app/actions/uploadToIPFS";
import { quizData } from "@/constants/course-quizzes";
import { courseDetails as data } from "@/constants";

const REQUIRED_PERCENTAGE_SCORE = 60;

export default function QuizPanel({ quiz }) {
  const router = useRouter();
  const pathname = usePathname();
  const { lectureId } = useParams() || {};
  const quizSample = quiz || quizData[lectureId];
  const totalQuestions = quizSample.length;
  let [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  let [selectedAnswerIdx, setSelectedAnswerIdx] = useState(-1);
  let [question, setQuestion] = useState(quizSample[0].question);
  const [isUserInputModalOpen, setIsUserInputModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState(null);
  const [isCertificateModalOpen, setIsCertificateModalOpen] = useState(false);

  const lastQuizKeyName = Object.keys(quizData).at(-1);
  const isCourseFinalQuiz = lastQuizKeyName === lectureId;

  const currentSectionIndex = data[0].details.sections.findIndex((section) =>
    section.subSections.find(({ link }) => link === pathname),
  );

  const nextSectionLink = isCourseFinalQuiz
    ? null
    : data[0].details.sections[currentSectionIndex + 1]?.subSections[0]?.link;

  const attemptedQuestionIndices = []; // array of the indices of the attempted questions

  function onSubmit(userName) {
    setUserName(userName);
    setIsUserInputModalOpen(false);
    setIsCertificateModalOpen(true);
  }

  function onCerticateModalClose() {
    router.push("/dashboard");
  }

  const changeSelectedAnswer = (i) => {
    attemptedQuestionIndices.push(currentQuestionIdx);
    quizSample[currentQuestionIdx].selectedAnswerIdx = i;
    setSelectedAnswerIdx(i);
  };
  let answerOptions = quizSample[currentQuestionIdx].answerOptions;
  return (
    <>
      <Box p={4}>
        <QuizQuestionPanel
          currentQuestionIdx={currentQuestionIdx}
          question={question}
          attemptedQuestionIndices={attemptedQuestionIndices}
          totalQuestions={totalQuestions}
        />
        <QuizAnswerPanel
          answerOptions={answerOptions}
          selectedAnswerIdx={selectedAnswerIdx}
          changeSelectedAnswer={changeSelectedAnswer}
        />
        <Flex justifyContent="space-between" mt={4}>
          <Button
            variant="outline"
            border="none"
            leftIcon={
              <ArrowRight color="Blue" sx={{ transform: "rotate(180deg)" }} />
            }
            minWidth="30%"
            onClick={() => {
              previousQuestion();
            }}
            isDisabled={currentQuestionIdx == 0 ? true : false}
          >
            Previous
          </Button>
          <Button
            minWidth="30%"
            rightIcon={<ArrowRight color="white" />}
            onClick={() => {
              currentQuestionIdx == totalQuestions - 1
                ? submitScore()
                : nextQuestion();
            }}
          >
            {currentQuestionIdx == totalQuestions - 1 ? "Submit" : "Next"}
          </Button>
        </Flex>
      </Box>
      <UserInputModal isOpen={isUserInputModalOpen} modalAction={onSubmit} />
      <CertificateModal
        userName={userName}
        isOpen={isCertificateModalOpen}
        onClose={onCerticateModalClose}
        modalAction={generateCertificate}
      />
    </>
  );

  function previousQuestion() {
    currentQuestionIdx = currentQuestionIdx - 1;
    setCurrentQuestionIdx(currentQuestionIdx);
    setQuestion(quizSample[currentQuestionIdx].question);
    setSelectedAnswerIdx(quizSample[currentQuestionIdx].selectedAnswerIdx);
  }

  function nextQuestion() {
    // click on submit button
    if (currentQuestionIdx == totalQuestions - 1) {
      //generate Quiz Report
      let marks = 0;
      let distinctQues = [];
      distinctQues = attemptedQuestionIndices.filter(function (v, i, self) {
        return i == self.indexOf(v);
      });
      for (let i = 0; i < distinctQues.length; i++) {
        marks =
          marks +
          (quizSample[distinctQues[i]].selectedAnswerIdx ==
          quizSample[distinctQues[i]].answer
            ? 1
            : 0);
      }
      return;
    }
    if (selectedAnswerIdx == -1) {
      currentQuestionIdx = currentQuestionIdx + 1;
      setCurrentQuestionIdx(currentQuestionIdx);
      setQuestion(quizSample[currentQuestionIdx].question);
      setSelectedAnswerIdx(quizSample[currentQuestionIdx].selectedAnswerIdx);
    } else {
      attemptedQuestionIndices.push(currentQuestionIdx);
      quizSample[currentQuestionIdx].selectedAnswerIdx = selectedAnswerIdx;
      currentQuestionIdx = currentQuestionIdx + 1;
      setCurrentQuestionIdx(currentQuestionIdx);
      setQuestion(quizSample[currentQuestionIdx].question);
      setSelectedAnswerIdx(quizSample[currentQuestionIdx].selectedAnswerIdx);
    }
  }

  function submitScore() {
    const score = quizSample.reduce((acc, curr) => {
      const { selectedAnswerIdx, answer } = curr;
      if (selectedAnswerIdx === answer) {
        acc += 1;
      }
      return acc;
    }, 0);

    const percentageScore = (score / quizSample.length) * 100;
    if (percentageScore > REQUIRED_PERCENTAGE_SCORE) {
      console.log("congrats you have cleared the section");

      // if final quiz of score, open userInput modal for certificate generation
      if (isCourseFinalQuiz) {
        setIsUserInputModalOpen(true); // show userInput modal
        return;
      }
      // else move to the next section of the course
      // TODO: Sudhanshu: add your code here for cashback
      router.push(nextSectionLink);
    }

    console.log("Watch the videos again and re-try the test");
  }

  async function generateCertificate(props) {
    const {
      userName,
      instructorName = "Mayank Chhipa",
      courseTitle = "An Intro to JS",
      chainId = 11155111,
    } = props;
    const cert = await createCertificate(userName, instructorName, courseTitle);
    const formData = new FormData();
    formData.append("file", cert);
    setIsLoading(true);
    const res = await sendFileToIPFS(formData);
    // TODO: Mayank - add your code for NFT generation here.
    setIsLoading(false);
    const ipfsTokenURI = "https://ipfs.io/ipfs/" + res.IpfsHash;
    console.log("NFT Generation Completed!!");
    console.log({ res });
    console.log({ ipfsTokenURI });
    return ipfsTokenURI;
    /* downloadFile(cert); */
  }
}
