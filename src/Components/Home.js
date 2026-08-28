import React, { useState } from 'react';
import './Home.css';

function Home() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedCaption, setSelectedCaption] = useState('');
    const [selectedDescription, setSelectedDescription] = useState('');

    const images = [
        { src: 'images/10.jpg', caption: 'Wedding garden-themed', description: 'This theme is perfect for an outdoor wedding with lush greenery and elegant floral decorations.' },
        { src: 'images/12.jpg', caption: 'Wedding Hotal-themed', description: 'A luxurious hotel setting for a sophisticated wedding reception with stunning views.' },
        { src: 'images/17.jpg', caption: 'Wedding Home-themed', description: 'A cozy, intimate wedding setup in the comfort of your home with personal touches.' },
        { src: 'images/22.jpg', caption: 'Wedding garden-themed', description: 'This theme is perfect for an outdoor wedding with lush greenery and elegant floral decorations.' },
        { src: 'images/24.jpg', caption: 'Wedding Hotal-themed', description: 'A luxurious hotel setting for a sophisticated wedding reception with stunning views.' },
        { src: 'images/20.jpg', caption: 'Wedding Home-themed', description: 'A cozy, intimate wedding setup in the comfort of your home with personal touches.' },
    ];

    const handleImageClick = (src, caption, description) => {
        setSelectedImage(src);
        setSelectedCaption(caption);
        setSelectedDescription(description);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setSelectedCaption('');
        setSelectedDescription('');
    };

    return (
        <>
            <div className="home-container">
                <div className="text-container">
                    <h1>Welcome to CelebrateMomer</h1>
                    <p>
                        Welcome to a World of Endless Possibilities
                        <br />
                        At CelebrateMomer, we believe that every new day brings an opportunity to create something extraordinary. Whether you're here to find inspiration, explore creative ideas, or simply enjoy a moment of beauty, you're in the right place. Let's embark on this exciting journey together, where dreams turn into reality, and every step brings us closer to making the impossible possible.
                        <br />
                        Welcome to a space where imagination knows no bounds, and every moment is a chance to discover something.
                    </p>
                </div>
                <div className="image-container">
                    <img src="images/1.jpg" alt="Image" className="rounded-image" />
                </div>
            </div>
            <div className="gallery-section">
                <h2>Themes</h2>
                <div className="gallery">
                    {images.map((image, index) => (
                        <div className="gallery-item" key={index}>
                            <img
                                src={image.src}
                                alt={image.caption}
                                className="gallery-image"
                                onClick={() => handleImageClick(image.src, image.caption, image.description)}
                            />
                            <p className="caption">{image.caption}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for enlarged image with description */}
            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content">
                        <img src={selectedImage} alt="Selected" />
                        <h3>{selectedCaption}</h3>
                        <p>{selectedDescription}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Home;
