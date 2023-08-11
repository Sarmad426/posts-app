interface PostProps {
    id: string,
    title: string,
    content: string,
    liked: boolean,
    hated: boolean,
    createdAt: Date,
    updatedAt: Date,
    handleLike: (id: string) => void,
    handleNoLike: (id: string) => void,
    handleDisLike: (id: string) => void,
    handleNoHate: (id: string) => void,
    editPost: (id: string, title: string, content: string) => void,
    deletePost: (id: string) => void,
}

export default PostProps;