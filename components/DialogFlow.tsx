import React, { useEffect } from 'react';


const DialogflowMessenger: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
<df-messenger
  chat-title="Hades_Smart"
  agent-id="76891c27-97b8-4aa6-b188-8b02952506fd"
  language-code="vi"
></df-messenger>
  );
};

export default DialogflowMessenger;