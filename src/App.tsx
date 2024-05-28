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
