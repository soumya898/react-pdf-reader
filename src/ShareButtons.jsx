
import React, { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaCopy, FaShareAlt, FaTwitter, FaFacebook, FaReddit, FaDiscord, FaTelegram, FaFacebookMessenger } from 'react-icons/fa';
import './ShareButtons.css';

const ShareButtons = ({ url, title }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(url);
    alert('URL copied to clipboard!');
  };

  const mailtoLink = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
  const whatsappLink = `https://wa.me/?text=${encodeURIComponent(title)}%20${encodeURIComponent(url)}`;
  const twitterLink = `https://twitter.com/intent/tweet?url=${url}`;
  const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  const redditLink = `https://www.reddit.com/submit?url=${url}`;
  const discordLink = `https://discord.com/share?url=${url}`;
  const messengerLink = `https://www.messenger.com/t/${url}`;
  const telegramLink = `https://t.me/share/url?url=${url}`;

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className="share-buttons-container">
      <button className="share-button main-share" onClick={togglePopup}>
        <FaShareAlt size={24} />
      </button>

      {isPopupOpen && (
        <div className="share-popup">
          <button className="close-popup" onClick={togglePopup}>&times;</button>
          <div className="share-options">
            <a href={twitterLink} className="share-button twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
              <span>Twitter</span>
            </a>
            <a href={facebookLink} className="share-button facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
              <span>Facebook</span>
            </a>
            <a href={redditLink} className="share-button reddit" target="_blank" rel="noopener noreferrer">
              <FaReddit size={24} />
              <span>Reddit</span>
            </a>
            <a href={discordLink} className="share-button discord" target="_blank" rel="noopener noreferrer">
              <FaDiscord size={24} />
              <span>Discord</span>
            </a>
            <a href={whatsappLink} className="share-button whatsapp" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={24} />
              <span>WhatsApp</span>
            </a>
            <a href={messengerLink} className="share-button messenger" target="_blank" rel="noopener noreferrer">
              <FaFacebookMessenger size={24} />
              <span>Messenger</span>
            </a>
            <a href={telegramLink} className="share-button telegram" target="_blank" rel="noopener noreferrer">
              <FaTelegram size={24} />
              <span>Telegram</span>
            </a>
            <a href={mailtoLink} className="share-button email">
              <FaEnvelope size={24} />
              <span>Email</span>
            </a>
            <button className="share-button copy" onClick={handleCopyUrl}>
              <FaCopy size={24} />
              <span>Copy URL</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShareButtons;
