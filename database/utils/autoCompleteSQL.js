module.exports = {
  sqlQuery: (query) => `SELECT NameMatch, TeamMatch, SportMatch, CategoryMatch, ColorMatch, GenderMatch FROM (
    SELECT name,
       CASE
         WHEN name like "%${query}%" THEN name
        END AS NameMatch,
  
        team,
         CASE
         WHEN team like "%${query}%" THEN team
        END AS TeamMatch,
  
        sport,
          CASE
          WHEN sport like "%${query}%" THEN sport
        END AS SportMatch,
  
        category,
          CASE
          WHEN category like "%${query}%" THEN category
        END AS CategoryMatch,
  
        color,
          CASE
          WHEN color like "%${query}%" THEN color
        END AS ColorMatch,
  
       gender,
       CASE
         WHEN gender LIKE "%${query}%" THEN gender
       END AS GenderMatch
  
      FROM products AS T
  ) AS T WHERE NameMatch IS NOT NULL OR TeamMatch IS NOT NULL OR SportMatch IS NOT NULL OR CategoryMatch IS NOT NULL OR ColorMatch IS NOT NULL OR GenderMatch IS NOT NULL`
}
