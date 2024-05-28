import ProfileCardInfo, {CardInfo} from "./ProfileCardInfo";
import {BackgroundContent, BgPatternAndAvatar} from "./ProfileCardBackground";
import Root from "./ProfileCardRoot";
import Typography from "./ProfileCardTypography";
import { TextContent } from "./TextContent";
import Stats, { ProfileCardStats } from "./ProfileCardStats";

const ProfileCard = {
    Root,
    BackgroundContent,
    BgPatternAndAvatar,
    TextContent,
    CardInfo,
    Info: {
        Name: ProfileCardInfo.Name,
        Age: ProfileCardInfo.Age,
        City: ProfileCardInfo.City
    },
    Stats: ProfileCardStats,
    Stat: {
        Count: Stats.Count,
        Name: Stats.Name,
    },
    Typography
}

export default ProfileCard