import ProfileCard from "./components/core"

function App() {

  return (
    <div className="relative justify-center items-center flex w-full h-screen p-5">
        <ProfileCard.Root>
            <ProfileCard.BackgroundContent>
              <ProfileCard.BgPatternAndAvatar avatar="https://avatars.githubusercontent.com/u/75491649?v=4" bgPattern="https://freefrontend.com/assets/img/css-background-patterns/2023-rhombus-vs-octagon-pattern.png"  />
              <ProfileCard.CardInfo>
                  <ProfileCard.Info.Name>Abdulrahman</ProfileCard.Info.Name>
                  <ProfileCard.Info.Age>26</ProfileCard.Info.Age>
                  <ProfileCard.Info.City>Kaduna</ProfileCard.Info.City>
              </ProfileCard.CardInfo>
            </ProfileCard.BackgroundContent>
            <ProfileCard.TextContent>
                <ProfileCard.Stats>
                    <ProfileCard.Stat.Count>80k</ProfileCard.Stat.Count>
                    <ProfileCard.Stat.Name>Followers</ProfileCard.Stat.Name>
                </ProfileCard.Stats>
                <ProfileCard.Stats>
                    <ProfileCard.Stat.Count>803k</ProfileCard.Stat.Count>
                    <ProfileCard.Stat.Name>Likes</ProfileCard.Stat.Name>
                </ProfileCard.Stats>
                <ProfileCard.Stats>
                    <ProfileCard.Stat.Count>1.4k</ProfileCard.Stat.Count>
                    <ProfileCard.Stat.Name>Photos</ProfileCard.Stat.Name>
                </ProfileCard.Stats>
            </ProfileCard.TextContent>
        </ProfileCard.Root>
    </div>
  )
}

export default App
