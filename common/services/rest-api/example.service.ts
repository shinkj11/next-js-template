import qs from "qs";
import { AxiosApiWrapper } from "../abstract/axios-api-wrapper.abstract";

interface ExampleRequestType {
    name: string;
}

interface ExampleResponseType {
    age: number;
}

class exampleAxiosService extends AxiosApiWrapper {
    endPoint!: string;
    getExample(request: ExampleRequestType): Promise<ExampleResponseType> {
        this.endPoint = `example?${qs.stringify(request, {encode: false})}`;
        return this.get<ExampleResponseType>();
    }

    postExample(request: ExampleRequestType): Promise<ExampleResponseType> {
        this.endPoint = 'examle';
        return this.post<ExampleResponseType>(request);
    }
}

export default new exampleAxiosService();