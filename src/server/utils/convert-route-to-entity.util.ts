const mapping: Record<string, string> = {
  'expert-stories': 'expert_story',
  organizations: 'organization',
  'sales-stories': 'sales_story',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
