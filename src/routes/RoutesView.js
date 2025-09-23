import { useRoutes } from "react-router-dom";
import routes from "./routes";

export default function RoutesView() {
    const element = useRoutes(routes);
    return element;
}