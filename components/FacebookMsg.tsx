"use client"
import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg = () => {
  return (
    <FacebookProvider appId="1230179934785199" chatSupport>
      <CustomChat pageId="118195981235114" minimized={true}/>
    </FacebookProvider>    
  );
}
export default FacebookMsg