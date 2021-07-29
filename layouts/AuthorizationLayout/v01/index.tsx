import { FunctionComponent } from "react";
import sign_banner from '../../../public/sign_banner.jpeg';


const AuthorizationLayout: FunctionComponent = ({
  children
}) => (
  <div className="flex" style={{ minHeight: 'calc(100vh - 80px)' }}>
    <div className="py-8 px-[60px] flex flex-col justify-center items-center flex-1">
      {children}
    </div>
    <div
        className="animated-banner w-1/3 min-h-full bg-center bg-cover rounded-l-2xl"
        style={{
          backgroundImage: `url('${sign_banner.src}')`
        }}
      />

    {/* <style jsx global>{`
      @keyframes anibaner {
        0% {
          background-position: 0% center;
        }
        50% {
          background-position: 100% center;
        }
        100% {
          background-position: 0% center;
        }
      }

      .animated-banner {
        animation: anibaner 60s infinite linear;
      }
    `}</style> */}
  </div>
);


export default AuthorizationLayout;
