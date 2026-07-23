import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins"

ExternalPlugin.Explorer({
  sortFn: (a: any, b: any) => {
    const order: Record<string, number> = {
      // ROOT
      "Game Vision": 1,
      "Game Design": 2,
      Production: 3,
      Technical: 4,
      Analytics: 5,

      // GAME VISION
      "Vision Statement": 10,
      "Target Audience": 11,
      "Game Philosophy": 12,
      "Game Pillars": 13,
      "Gameplay Intentions": 14,
      "Economy & Monetization Philosophy": 15,
      "Game Inspirations": 16,

      "Core Experience": 20,
      "Core Loop": 21,
      "Meta Loop": 22,
      "Player Journey": 23,

      // GAME DESIGN
      Home: 30,
      "Player Experience": 31,
      Systems: 32,
      Features: 33,
      Content: 34,
      Balancing: 35,

      Motivation: 40,
      Progression: 41,
      Retention: 42,
      Rewards: 43,

      // SYSTEMS
      "Planet System": 50,
      "Movement System": 51,
      "Collection System": 52,
      "Economy System": 53,
      "Social System": 54,

      Structure: 60,
      Vision: 61,
      Economy: 62,
      Monetization: 63,
      Collections: 64,
      Analytics: 65,
      "Design Decisions": 66,
      Planets: 67,
      assets: 999,

      // PRODUCTION
      "Production Pillars": 100,
      "Technical Pillars": 101,
      Process: 102,
      "Decision Log": 103,
      Meetings: 104,
      Constraints: 105,

      "Meeting Methodology": 110,
      "Decision Framework": 111,
      "Documentation Rules": 112,

      "Questions Log": 120,
      "Decisions Log": 121,
      "Rejected Ideas": 122,

      "Scope Principles": 130,
      "Team Constraints": 131,
      "Time Constraints": 132,

      // TECHNICAL
      Architecture: 200,
      Infrastructure: 201,
      Tools: 202,
      Performance: 203,
      "Development Guidelines": 204,

      // ANALYTICS
      "KPI Framework": 300,
      "Tracking Plan": 301,
      "Events Dictionary": 302,
      Dashboards: 303,
      Experiments: 304,
    }

    // Reverse sorting for meetings
    if (String(a.displayName).startsWith("M") && String(b.displayName).startsWith("M")) {
      return String(b.displayName).localeCompare(String(a.displayName))
    }

    return (order[String(a.displayName)] ?? 999) - (order[String(b.displayName)] ?? 999)
  },
})

const config = await loadQuartzConfig()

export default config

export const layout = await loadQuartzLayout()
