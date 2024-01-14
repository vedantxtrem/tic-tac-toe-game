import Grid from './component/Grid/Grid';

function App() {

  return (
    <div className='h-screen flex justify-center items-center bg-black w-[100%] '>
      <Grid numberOfCards={9} />
    </div>
  )
}

export default App;
