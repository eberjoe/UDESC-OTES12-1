export type CrewMember = {
  name: string;
  listOfPriorities?: MissionItem[];
};

enum MissionItem {
  OXYGEN = 1,
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
