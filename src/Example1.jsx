import { getPostsPage } from "./api/axios";
import { useState,useEffect } from "react";
import PostItem from "./singleItems/postItem";

const Example1=()=>{

    const [page, setPage] = useState(1);
    const [posts, setPosts]= useState([])

    console.log("page", page)
    console.log("posts", posts)

    useEffect(()=>{
        getPostsPage(page).then(data=> setPosts(data) )
    },[page])

    const content= posts?.map(post=>{
        return <PostItem key={post?.id} post= {post} />
    })

    const nextPage=()=> setPage(prev => prev+1)

    const prevPage=()=> setPage(prev=> prev-1)

    return(
        <>
            <nav>
                <button onClick={prevPage} disabled={page === 1}>Prev Page</button>
                <button onClick={nextPage} disabled={!posts?.length}>Next Page</button>
                {content}
            </nav>

        </>
    )
}

export default Example1;