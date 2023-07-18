import { useEffect } from 'react';
import { spaceGrotesk } from "../../pages/_app";

function Direct() {
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      window.location.replace('https://www.figma.com/proto/LYCHX7sPqp7SFRoAJ5YssF/Portfolio-Website?page-id=629%3A4599&type=design&node-id=1549-704&viewport=-4163%2C53288%2C0.73&t=MRdnlKSf3Slvf0pv-8&scaling=min-zoom&starting-point-node-id=1549%3A704&show-proto-sidebar=1&hide-ui=1');
    }, 3000);

    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <div className={`flex justify-center items-center h-screen flex-col ${spaceGrotesk.className}`}>
        <q className="text-2xl uppercase">This site is under construction</q>
        <p className="text-xl mt-10">Directing to Figma prototype...</p>
    </div>
  );}

export default Direct;
