import { CardProfile } from './SocialNetworkProfile/UserCard'
import userInfo from "../DataJSON/user.json"



export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        // flexDirection: "column",
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <CardProfile events={userInfo} />
  
      
      
    </div>
    
  );
};
// console.log(userInfo)
