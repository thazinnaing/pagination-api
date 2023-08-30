import Example1 from "./Example1";
import Example2 from "./Example2";
import { QueryClient,QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

const App=()=>{
    return(
        <QueryClientProvider client={queryClient}>
        {/* <Example1 /> */}
        <Example2 />
        </QueryClientProvider>
    )
}
export default App;