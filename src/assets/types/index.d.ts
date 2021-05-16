interface SymptonInfo{
  sympton: string;
  display: string;
  lackElements: string[];
}

interface ElementInfo {
  need: string;
  display: string;
}

interface HealthFormData {
  needs: string[],
  work: string | null,
  breakfastTime: string | null,
  bedTime: string | null,
  mealType: string | null,
  waterType: string | null,
  supplementsHabit: null | boolean,
  height: null | number,
  weight: null | number,
  name: string,
  phone: string,
  gender: string,
  birthday: string,
}

interface NeedList {
  [p: string]: string;
  [a: string]: string;
  [b: string]: string;
  [c: string]: string;
  [e: string]: string;
  [ca: string]: string;
  [folate: string]: string;
  [dx: string]: string;
  [enzyme: string]: string;
  [probiotics: string]: string;
  [fishOil: string]: string;
  [lecithin: string]: string;
  [fiber: string]: string;
  [greenTea: string]: string;
  [garlic: string]: string;
  [glucosamine: string]: string;
  [bilberry: string]: string;
  [q10: string]: string;
  [echinacea: string]: string;
  [mPlus: string]: string;
  [proleber: string]: string;
  [gla: string]: string;
  [oil: string]: string;
  [water: string]: string;
  [sleep: string]: string;
}

interface SymptonsJson {
  symptons: SymptonInfo[];
  needs: ElementInfo[];
  needList: NeedList;
}

interface ElementTableItem {
  name: string;
  level: number|unknown;
}
