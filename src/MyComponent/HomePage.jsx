import { useNavigate } from "react-router-dom";

function HomePqage() {
  const navigate = useNavigate();
    function handleClick(){
        navigate('/Register');
    }
  return (
    <div className="flex overflow-hidden relative flex-col items-center pt-1 pb-3.5 text-center text-white min-h-[217px] bg-black"  >
      <div className="flex relative flex-col items-center max-w-full w-[977px]">
        <div className="mt-4 text-xl font-light leading-9 text-white max-md:max-w-full">
          Calling all coaches! Ready to level up your coaching game and create
          a lasting impact?
        </div>
        <div className="self-stretch mt-1.5 text-4xl font-bold text-amber-400 uppercase leading-[50px] max-md:max-w-full max-md:text-2xl max-md:leading-[50px]">
          <span style={{ color: "white" }}>Coaching Success </span> Simplified: <br />
          <span style={{ color: "white" }}>Launch Your </span> Coaching Empire <span style={{ color: "white" }}>Today !!!</span>
        </div>
        <div className="mt-2 text-xl font-small leading-9 text-white max-md:max-w-full">
          Discover the Secret 4S Formula and 4T Process to Thrive in Your
          Coaching Business!
        </div>
      </div>
      <div className="relative w-full max-w-[1688px] max-md:max-w-full ">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <iframe style={{ marginTop: "20%" }} height="315" src="https://www.youtube.com/embed/trudesxpln8?si=yHY3d4EczgmyiZhE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="flex flex-col ml-1 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col px-4 py-4 mt-20 w-full text-center text-white rounded-md bg-stone-500 bg-opacity-20 max-md:mt-10 max-md:max-w-full">
              <div className="flex justify-center items-center px-16 py-4 text-lg font-medium leading-7 bg-black rounded-md border-green-500 border-solid border-[3px] max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 items-center">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/76dc0ee49ae41a89adc5def4f67a1354dfa2571d0a5930b948492aebd2aa5d6e?"
                    className="shrink-0 w-15 h-5 object-cover mt-1"
                    alt="TS4 Online Launch Plan"
                  />
                  <div className="flex-auto text-lg font-medium leading-7">
                    TS4 Online Launch Plan
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center px-16 py-4 mt-5 bg-black rounded-md border-green-500 border-solid border-[3px] max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5">
                  <div className="text-xl leading-5"></div>
                  <div className="flex-auto text-lg font-medium leading-7">
                    June 15th, 2024 08:00PM
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center px-16 py-4 mt-5 bg-black rounded-md border-green-500 border-solid border-[3px] max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5">
                  <div className="text-xl font-black leading-5"></div>
                  <div className="flex-auto text-lg font-bold leading-7">
                    Rahul Awasthi
                    <span className="font-medium">
                      {" "}
                      - Business Growth Mentor
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center self-center mt-5 max-w-full text-2xl font-black leading-7 uppercase shadow-sm bg-white bg-opacity-0 text-stone-900 w-[402px]">
                <button onClick={handleClick} className="justify-center px-16 py-5 bg-amber-400 rounded shadow-sm max-md:pr-5 max-md:pl-6">
                  Register For Free
                </button>
              </div>
              <div className="self-center mt-6 text-2xl font-semibold leading-9">
                📢 Sign up now Seats are limited
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default HomePqage;