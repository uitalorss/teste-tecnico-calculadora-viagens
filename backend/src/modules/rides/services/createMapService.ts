import axios from "axios";
import { injectable } from "tsyringe";

@injectable()
export class CreateMapService {
    public async execute(coordinate: string){
        const validCoordinate = coordinate.replace(/\\/g, "%5C");
        const imageResponse = await axios.get(`https://maps.googleapis.com/maps/api/staticmap?size=600x400&path=enc:${validCoordinate}&key=${process.env.GOOGLE_API_KEY}`, {
            responseType: "arraybuffer"
        });
        const image = Buffer.from(imageResponse.data, "binary").toString("base64");

        return image
    }
}