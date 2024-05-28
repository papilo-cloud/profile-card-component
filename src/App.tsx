import ProfileCard from "./components/core"

function App() {

  return (
    <div className="relative justify-center items-center flex w-full h-screen p-5">
        <ProfileCard.Root>
            <ProfileCard.BackgroundContent>
              <ProfileCard.BgPatternAndAvatar  />
              <ProfileCard.CardInfo>
                  <ProfileCard.Info.Name>Abubakar</ProfileCard.Info.Name>
                  <ProfileCard.Info.Age>36</ProfileCard.Info.Age>
                  <ProfileCard.Info.City>London</ProfileCard.Info.City>
              </ProfileCard.CardInfo>
            </ProfileCard.BackgroundContent>
            <ProfileCard.TextContent>
              <ProfileCard.Typography.HeadingText>300k</ProfileCard.Typography.HeadingText>
            </ProfileCard.TextContent>
        </ProfileCard.Root>
    </div>
  )
}

export default App
