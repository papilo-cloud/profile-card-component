import ProfileCard from "./components/core"

function App() {

  return (
    <div className="relative justify-center items-center flex w-full h-screen p-5">
        <ProfileCard.Root>
            <ProfileCard.BackgroundContent className="">
              <ProfileCard.BgPatternAndAvatar className="" bgPattern={'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'} avatar="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </ProfileCard.BackgroundContent>
            <ProfileCard.TextContent>
              <h1>300K</h1>
            </ProfileCard.TextContent>
        </ProfileCard.Root>
    </div>
  )
}

export default App
