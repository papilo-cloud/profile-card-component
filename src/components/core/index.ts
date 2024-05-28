import ProfileCardInfo, {CardInfo} from "./ProfileCardInfo";
import {BackgroundContent, BgPatternAndAvatar} from "./ProfileCardBackground";
import Root from "./ProfileCardRoot";
import Typography from "./ProfileCardTypography";
import { TextContent } from "./TextContent";

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
    Typography
}

export default ProfileCard