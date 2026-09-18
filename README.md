# CareBridge AI 3.0

Competition-ready local Flask + SQLite prototype.

## Included
- Global language selector: one selection updates the complete UI.
- English, Tamil, Malayalam plus selectable Indian languages with English fallback until additional UI translations are added.
- Food search requires no food ID.
- 28 Indian states.
- 2,025 generated regional food/recipe combinations per state (56,700 total).
- Nutrition buttons: Non-Vegetarian, Vegetarian, Traditional & Cultural.
- Nutrition focus: Protein, Iron, Magnesium, Zinc, Vitamin C, Vitamin A, Fiber.
- Every food result: nutrients, ingredients, benefits, preparation, how to eat.
- AI Assistant + browser voice input.
- Profile personalization.
- Emergency safety screen.
- Responsive desktop/mobile UI.
- No API key required.

## Windows PowerShell
cd "CareBridge_AI_Competition_Ready"
Set-ExecutionPolicy -Scope Process -ExecutionPolicy RemoteSigned
.\.venv\Scripts\Activate.ps1
cd backend
python -m pip install -r requirements.txt
python app.py

Open http://127.0.0.1:5000

If .venv does not exist:
py -3.10 -m venv .venv

## Important
The 2,025/state records are generated combinations from curated regional templates for a scalable demo. For production, replace them with reviewed, sourced recipes/nutrition data. The offline "AI" is a deterministic intent/recommendation engine, not a medically validated ML model.
