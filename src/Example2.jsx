import { useQuery} from "react-query";
import { getUsersPage } from "./api/axios";
import { useState } from "react";
import UserItem from "./singleItems/UserItem";
import PageButtons from "./pageButtons";


const Example2=()=>{

    const [page, setPage]=useState(1)

    const {
        isLoading,
        isError,
        error,
        data: users,
        isFetching,
        isPreviousData,
    } = useQuery(['/users', page],
                 ()=>getUsersPage(page),
                 {keepPreviousData : true})

    if (isLoading) return <p>Loading Users...</p>

    if (isError) return <p>Error: {error.message}</p>

    const content = users.data.map(user=> <UserItem key={user.id} user={user} />)

    const firstPage=()=>setPage(1)

    const lastPage=()=>setPage(users.total_pages)

    const pagesArray = Array(users.total_pages).fill().map((_,index)=>index+1)

    console.log("pagesArry", pagesArray);
    console.log("isPreviousData", isPreviousData)

    const nav=(
        <nav>
            <button onClick={firstPage} disabled={isPreviousData || page ===1}>&lt;&lt;</button>
            {pagesArray.map(page=> <PageButtons key={page} page={page}setPage={setPage} isPreviousData={isPreviousData} />)}
            <button onClick={lastPage} disabled={isPreviousData || page === users.total_pages}>&gt;&gt;</button>
        </nav>
    )

    return(
       <>
        {nav}
        {isFetching && <span>Loading.....</span>}
        {content}
       </>
        
        
    )
}

export default Example2;