"use server";

export const sendFileToIPFS = async (
  formData,
  { userName: studentName, courseTitle, instructorName },
) => {
  if (formData) {
    try {
      formData.append("file", "readstream");
      formData.append(
        "pinataMetadata",
        JSON.stringify({ name: studentName + courseTitle }),
      );
      formData.append("pinataOptions", JSON.stringify({ cidVersion: 0 }));

      console.log("uploading certificate to IPFS...");
      const resFile = await fetch(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        {
          method: "POST",
          body: formData,
          redirect: "follow",
          headers: {
            Authorization: `Bearer ${process.env.PINATA_API_KEY}`,
          },
        },
      );
      const resData = await resFile.json();

      console.log("Certificate uploaded successfully ");
      console.log({ resData });

      const pinataContent = {
        name: studentName + " certificate for " + courseTitle,
        description: studentName + " " + courseTitle + " " + instructorName,
        image: `ipfs://${resData.IpfsHash}`,
      };
      const pinataMetadata = {
        name: pinataContent.name,
      };

      console.log("uploading image metadata to IPFS...");
      const jsonUploadRes = await fetch(
        "https://api.pinata.cloud/pinning/pinJSONToIPFS",
        {
          method: "POST",
          body: JSON.stringify({ pinataContent, pinataMetadata }),
          redirect: "follow",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.PINATA_API_KEY}`,
          },
        },
      );

      const imageMetaDataUploadResponse = await jsonUploadRes.json();

      console.log("Image metadata uploaded successfully to IPFS");
      console.log({ imageMetaDataUploadResponse });

      return {
        certResponse: resData,
        metaDataRes: imageMetaDataUploadResponse,
      };
      //Take a look at your Pinata Pinned section, you will see a new file added to you list.
    } catch (error) {
      console.log("Error sending File to IPFS: ");
      console.log(error);
    }
  }
};
