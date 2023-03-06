
import reactLogo from './assets/react.svg'
import { useLaztLoading } from './use/useLaztLoading'

function App() {

  const { items, page, size, observe } = useLaztLoading();

  return (
    <div className="w-full rounded ">
      <section className="px-2 py-12 mx-auto sm:px-1 gu-bg-white lg:px-2">


        <div className="flex flex-wrap ">

          {Array.isArray(items) && items?.length > 0 ? items.map((item: any, index: any) => {
            return (<div key={index} ref={(el: any) => {
                if (index + 1 == (page + 1) * size) {
                  observe(el);
                }
              }}
                className="flex flex-col items-center justify-center w-full p-12 px-0 mb-0 rounded sahdow-lg md:w-6/12 lg:w-4/12 lg:mb-0 " >
                <img src={reactLogo} />
                <div className="text-center">
                  {index}
                </div>
              </div>

            )
          }) :(Array.isArray(items) && items?.length === 0 || !items) ? <div>
            <div className='w-full px-0 py-0 mb-0 lg:mb-0 '> <div className='p-10 gu-bg-white'>No Data</div></div>
          </div> : (<div className='w-full px-0 py-0 mb-0 lg:mb-0 '> <div className='p-2 gu-bg-white'>....</div></div>)
          }

        </div>
      </section>
    </div>
  )
}

export default App
