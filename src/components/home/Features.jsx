import featuresImg from "../../assets/image/features.png";
import { Link } from 'react-router-dom';


function Features() {
  return (
    <section className="pb-[84px] pt-20 md:mt-[100px]">
      <div className="container lg:px-12">
        <div className="grid lg:grid-cols-12 items-center gap-6">
          <div className="lg:col-span-8 ">
            <img className="max-md:w-full" src={featuresImg} alt="frame" />
          </div>
          <div className="lg:col-span-4">
            <h1 className="mb-1.5 text-[56px] font-bold leading-none text-[#F5BF42] lg:text-[63px]">
              A productivity powerhouse
            </h1>
            <p className="text-lg my-2 opacity-60">
              Simple, flexible, and powerful. All it takes are boards, lists,
              and cards to get a clear view of who’s doing what and what needs
              to get done. Learn more in our guide for getting started
            </p>

            <Link to="/dashboard">
              <button className="btn btn-warning">Explore Now</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

// import featuresImg from "../../assets/image/features.png";

// function Features() {
//   return (
//     <section className="pb-[114px] pt-20 md:mt-[100px]">
//       {/* <div className="container lg:px-8"> */}
//         <div className="grid grid-cols-12 items-center md:grid-cols-2">
//           <div className="col-span-4">
//             <h1 className="mb-1.5 text-[56px] font-bold leading-none text-[#F5BF42] lg:text-[73px]">
//               Tasker
//             </h1>
//             <p className="text-lg my-2 opacity-60">
//               Effortlessly Organize, Prioritize, and Conquer Tasks with Tasker -
//               Your Personal Productivity Ally for Seamless Goal Achievement and
//               Stress-Free Task Management.
//             </p>
//           </div>
//           <div className="col-span-8">
//             <img className="max-md:w-full" src={featuresImg} alt="frame" />
//           </div>
//         </div>
//       {/* </div> */}
//     </section>
//   );
// }

// export default Features;
