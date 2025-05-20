import React, { useEffect, useRef, useState } from 'react';
import './ContactEmail.css';
import orImage from '../../../assets/or.png';

const ContactEmail = () => {
  const [modifiedImageUrl, setModifiedImageUrl] = useState(null);
  const canvasRef = useRef(null);
  const [emailSent, setEmailSent] = useState(false);

  // generateRandomColor function
  // const generateRandomColor = () => {
  //   let r, g, b;
  //   do {
  //     r = Math.floor(Math.random() * 256);
  //     g = Math.floor(Math.random() * 256);
  //     b = Math.floor(Math.random() * 256);
  //   } while (r === 0 && g === 0 && b === 0); // Exclude black
  //   return [r, g, b];
  // };

  // updateImageColor function
  // const updateImageColor = () => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext('2d');
  //   const img = new Image();

  //   img.onload = () => {
  //     canvas.width = img.width;
  //     canvas.height = img.height;
  //     ctx.drawImage(img, 0, 0);

  //     const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  //     const data = imageData.data;
  //     const [r, g, b] = generateRandomColor();

  // Change the color of each pixel
  //     for (let i = 0; i < data.length; i += 4) {
  //       if (!(data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0)) { // Exclude black pixels
  //         data[i] = r;       // Red
  //         data[i + 1] = g;   // Green
  //         data[i + 2] = b;   // Blue
  //       }
  //     }

  //     ctx.putImageData(imageData, 0, 0);
  //     setModifiedImageUrl(canvas.toDataURL());
  //   };

  //   img.src = orImage; // Use the imported image
  // };

  // useEffect Code
  // useEffect(() => {
  //   updateImageColor(); // Initial color update

  //   const intervalId = setInterval(() => {
  //     updateImageColor();
  //   }, 1000); // Change color every second

  //   return () => clearInterval(intervalId); // Clean up interval on component unmount
  // }, []);

  // handleEmail function
  const handleEmail = () => {
    window.location.href = 'mailto:mdabdullahqais123@gmail.com';
    setEmailSent(true); // Show confirmation button
  };

  // confirmEmailSent function
  const confirmEmailSent = () => {
    const whatsappMessage =
      `Thank you for reaching out through my portfolio!\n I'll get back to you soon.`;
    const whatsappURL = `https://wa.me/8434515839?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
    setEmailSent(false); // Hide button again
  };

  return (
    <div className='contactEmail'>
      <div className="contactEmailRight">
        <p>Drop me an email anytime to get started!</p>
        <button onClick={handleEmail}>Email Me</button>
        {
          emailSent && (
            <button onClick={confirmEmailSent} style={{ marginTop: '12px' }}>
              Confirm After Email
            </button>
          )
        }
      </div>

      {/* <div className="contactEmailLeft">
        <img src={modifiedImageUrl || orImage} alt="Image" />
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div> */}
    </div>
  );
}

export default ContactEmail;


