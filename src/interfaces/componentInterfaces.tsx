export interface Note {          
    title: string,
    description: string,
    createdAt: string,
    author: {
        fullname: string,
    }    
}

export interface Caller {
    phoneNumber: string
};

