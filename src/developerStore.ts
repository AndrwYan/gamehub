import { create } from 'zustand';

interface DeveloperQuery {
  searchText ?: string;
}

interface DeveloperQueryStore {
  developerQuery: DeveloperQuery;
  setSearchText: (searchText: string) => void;
}

// 并通过泛型参数 <GameQueryStore> 来指定创建的状态类型为 GameQueryStore 接口。
const useDeveloperStore = create<DeveloperQueryStore>((set) => ({

    developerQuery: {},

    setSearchText: (searchText) => set(() => ({ developerQuery: { searchText } })),

}));

export default useDeveloperStore;
