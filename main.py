import joblib
import numpy as np

from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline


# ------------------------------------------------------------------
# DEMONSTRATION TRAINING DATA
# Replace this with the actual validated DeepDR-Canvas dataset.
# ------------------------------------------------------------------

X = np.array([
    [5, 0.20, 0.60, 0.10],
    [8, 0.35, 0.65, 0.20],
    [12, 0.50, 0.70, 0.30],
    [15, 0.65, 0.75, 0.40],
    [18, 0.80, 0.80, 0.50],
    [22, 0.90, 0.85, 0.65],
    [3, 0.15, 0.55, 0.05],
    [7, 0.30, 0.62, 0.15],
    [10, 0.45, 0.68, 0.25],
    [20, 0.75, 0.82, 0.55]
])

y = np.array([
    0.8,
    1.4,
    2.7,
    4.2,
    6.1,
    9.3,
    0.5,
    1.1,
    2.1,
    7.8
])


# ------------------------------------------------------------------
# Model pipeline
# ------------------------------------------------------------------

pipeline = Pipeline([
    (
        "scaler",
        StandardScaler()
    ),
    (
        "model",
        RandomForestRegressor(
            n_estimators=200,
            random_state=42
        )
    )
])


pipeline.fit(X, y)


# ------------------------------------------------------------------
# Save model
# ------------------------------------------------------------------

joblib.dump(
    pipeline,
    "drug_response_model.pkl"
)

print(
    "drug_response_model.pkl generated successfully."
)