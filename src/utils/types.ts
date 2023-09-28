export type FormData = {
    emailId: string;
    ldescription: string;
    name: string;
    sdescription: string;
};
export type setstatus = ({ index }: { index: number }) => void;

export type RequestData = FormData & {
    isCompleted?: boolean;
};

export type RequestProps = {
    request: RequestData;
    index: number;
    reqCompleted: number[];
    status: setstatus;
    deleteData: setstatus;
};

export type RequestListProps = {
    data: FormData[];
    setData: React.Dispatch<React.SetStateAction<FormData[]>>;
    reqCompleted: number[];
    setStatus: React.Dispatch<React.SetStateAction<number[]>>;
};

export type ChatMessage = {
    title: string;
    role: string;
    content: string;
};

export type Feedback = {
    name: string;
    shortDescriptio: string;
    emailId: string;
    longDescription: string;
};
