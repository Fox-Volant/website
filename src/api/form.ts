import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";
import main from "./mailTransporter";

export default function handler(
    req: GatsbyFunctionRequest,
    res: GatsbyFunctionResponse,
) {
    console.log(`submitted form`, req.body);
    main(req.body);
    res.json(`ok`);
}
