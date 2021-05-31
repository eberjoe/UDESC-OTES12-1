export type CrewMember = {
  name: string;
  listOfPriorities?: MissionItem[];
};

enum MissionItem {
  OXYGEN,
  WATER,
  MAP,
  FOOD,
  TXRX,
  ROPE,
  EMERGENCY_KIT,
  PARACHUTE,
  LIFEBOAT,
  BEACON,
  FIREARM,
  MILK,
  HEATER,
  COMPASS,
  MATCHES
}
