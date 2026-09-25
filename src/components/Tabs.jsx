import { setActiveTab } from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import activeTab from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "videos", "gif"];
  const dispatch = useDispatch();
  // const activeTab=useSelector((state)=>(state.searchSlice.activeTab));
  const activeTab=useSelector((state)=>(state.search.activeTab))
  return (
    <div className="flex justify-center gap-10 mt-4 p-10">
      {tabs.map((elem, id) => {
        return (
          <button
            key={id}
            className={`${activeTab==elem?'bg-red-600':'bg-amber-400'} bg-gray-950 px-5 py-2  cursor-pointer  active:scale-95`}
            onClick={() => {
              // dispatch(setActiveTab(elem));
              console.log(dispatch(setActiveTab(elem)));
            }}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
