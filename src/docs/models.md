## Mapatge entre API i model intern

| Camp API (`LlibreApi`)            | Camp model intern (`Llibre`) | Transformació / Normalització aplicada                                                   |
| --------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------- |
| `id` (`string \| number`)         | `id` (`string`)              | Es converteix a cadena de text amb `String(...)`.                                        |
| `titol` (`string`)                | `titol` (`string`)           | Es neteja amb `trim()`; si queda buit, s'assigna `'Sense títol'`.                        |
| `descripcio` (`string?`)          | `descripcio` (`string`)      | Es fa `trim()`; si està buida o no existeix, s'assigna `'Sense descripció disponible.'`. |
| `categoria` (`string?`)           | `categoria` (`string`)       | Es fa `trim()` i es posa la primera lletra en majúscula (o `'General'` si està buida).   |
| `dataCreacio` (`string?`)         | `dataPublicacio` (`string`)  | Es fa `trim()` i es normalitza a format `YYYY-MM-DD` (o `'Data no indicada'` si falta).  |
| `estatLectura` (`string?`)        | `estatLectura` (`string`)    | Es neteja i normalitza a `'Llegit'`, `'Llegint'` o `'Pendent'`.                          |
| `estrelles` (`number \| string?`) | `puntuacio` (`number`)       | Es converteix amb `Number(...)`, evitant `NaN` i limitant el valor entre `0` i `10`.     |
| `destacat` (`boolean?`)           | `destacat` (`boolean`)       | Es converteix a booleà amb `Boolean(...)` (`false` per defecte).                         |
