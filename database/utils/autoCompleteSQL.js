module.exports = {
  suggestionQuery: () => `SELECT NameMatch, TeamMatch, SportMatch, CategoryMatch, ColorMatch, GenderMatch FROM (
    SELECT name,
       CASE
         WHEN name like "%"?"%" THEN name
        END AS NameMatch,
  
        team,
         CASE
         WHEN team like "%"?"%" THEN team
        END AS TeamMatch,
  
        sport,
          CASE
          WHEN sport like "%"?"%" THEN sport
        END AS SportMatch,
  
        category,
          CASE
          WHEN category like "%"?"%" THEN category
        END AS CategoryMatch,
  
        color,
          CASE
          WHEN color like "%"?"%" THEN color
        END AS ColorMatch,
  
       gender,
       CASE
         WHEN gender LIKE "%"?"%" THEN gender
       END AS GenderMatch
  
      FROM products AS T
  ) AS T WHERE NameMatch IS NOT NULL OR TeamMatch IS NOT NULL OR SportMatch IS NOT NULL OR CategoryMatch IS NOT NULL OR ColorMatch IS NOT NULL OR GenderMatch IS NOT NULL`
}
