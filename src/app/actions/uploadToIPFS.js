"use server";

export const sendFileToIPFS = async (formData) => {
  if (formData) {
    try {
      formData.append("file", "readstream");
      formData.append(
        "pinataMetadata",
        JSON.stringify({ name: "certificate file" }),
      );
      formData.append("pinataOptions", JSON.stringify({ cidVersion: 0 }));
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
      const ImgHash = `ipfs://${resData.IpfsHash}`;
      console.log({ ImgHash, resData });
      return resData;
      //Take a look at your Pinata Pinned section, you will see a new file added to you list.
    } catch (error) {
      console.log("Error sending File to IPFS: ");
      console.log(error);
    }
  }
};
