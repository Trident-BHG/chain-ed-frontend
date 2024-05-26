import { createCertificate, downloadFile } from "@/app/lib/canvas/canvas";
import { sendFileToIPFS } from "@/app/actions/uploadToIPFS";

function GenerateCertificate() {
  return (
    <button
      onClick={() => {
        const fn = async () => {
          const cert = await createCertificate(
            "Chinmoy",
            "Mayank",
            "Intro to JS",
          );
          const formData = new FormData();
          formData.append("file", cert);
          const res = await sendFileToIPFS(formData);
          console.log({ res });
          /* downloadFile(cert); */
        };
        fn();
      }}
    >
      Generate Certificate
    </button>
  );
}
