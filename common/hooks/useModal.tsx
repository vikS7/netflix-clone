import { createContext, ReactNode, useContext, useState } from "react"
import { getTvSeasons } from "../utils/api/api";
import { API } from "../utils/types/api";

const modalContext = createContext({
    open: false,
    openModal: () => {},
    closeModal: () => {},
    seasonHandler: async () => {},
    season: null
})

const {Provider} = modalContext;

const useModalProvider = () => {
    const [open, setOpen] = useState(false);
    const [season, setSeason]= useState<API.SeasonDetails>()

    const openModal = () => {
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }

    const seasonHandler = async (id: any, season_number: any) => {
        const results = await getTvSeasons(id, season_number);
        setSeason(results);
    }

    return {open, openModal, closeModal, season, seasonHandler}
}

export function ModalProvider(props: { children: ReactNode }): JSX.Element {
    const modal = useModalProvider();
    return <Provider value={modal as any}>{props.children}</Provider>
}

export const useModal: any = () => {
    return useContext(modalContext);
}