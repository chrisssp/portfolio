/**
 * Technologies that exist in the data for filtering purposes
 * but should NEVER render as badges.
 *
 * These are universally implied by other techs in the stack — showing
 * them adds no signal, but keeping them in the data ensures filters work.
 *
 * To add more, just extend the set:
 *   export const HIDDEN_TECHS = new Set<string>(["typescript", "next_hidden_tech"]);
 */
export const HIDDEN_TECHS = new Set<string>(["typescript"]);
