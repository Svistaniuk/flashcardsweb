import React from 'react';
import CookieConsent from 'react-cookie-consent';

const CookiePopup = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Приймаю"
      declineButtonText="Відхилити"
      enableDeclineButton
      style={{
        background: '#2B373B',
        color: '#fff',
        textAlign: 'center',
        fontSize: '1rem',
        padding: '15px',
      }}
      buttonStyle={{
        background: '#6e00ff',
        color: '#fff',
        borderRadius: '6px',
        padding: '10px 20px',
        fontWeight: 'bold',
        margin: '0 10px',
        cursor: 'pointer',
      }}
      declineButtonStyle={{
        background: '#999',
        color: '#fff',
        borderRadius: '6px',
        padding: '10px 20px',
        fontWeight: 'bold',
        cursor: 'pointer',
      }}
      cookieName="ankiCloneCookieConsent"
      expires={365}
    >
      Ми використовуємо cookies для покращення роботи сайту. Приймаючи cookies, ви погоджуєтеся з нашою{" "}
      <a href="/privacy-policy" style={{ color: '#00bfff', textDecoration: 'underline' }}>політикою конфіденційності</a>.
    </CookieConsent>
  );
};

export default CookiePopup;
