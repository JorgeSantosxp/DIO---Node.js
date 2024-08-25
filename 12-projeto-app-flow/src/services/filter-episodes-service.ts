import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { PodcastTransferModel } from "../models/Podcast-Transfer-Model";
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (
    podcastName: string | undefined
): Promise<PodcastTransferModel> => {


    //define a interface de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode:0,
        body: [],
    };

    //buscando os dados
    const queryString = podcastName?.split("?p=")[1] || "";

    const data = await repositoryPodcast(queryString);

    //verifico se tem conteúdo
    responseFormat.statusCode = 
        data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT

    // if(data.length !== 0) {
    //     responseFormat.statusCode = StatusCode.OK
    // }else{
    //     responseFormat.statusCode = StatusCode.NO_CONTENT
    // }

    responseFormat.body = data;

    return responseFormat;
};