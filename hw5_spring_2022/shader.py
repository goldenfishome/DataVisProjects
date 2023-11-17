import pandas as pd, numpy as np
import hvplot.pandas  # noqa
import holoviews as hv

dat = pd.read_csv("data/household_power_consumption.txt", sep=';',low_memory=False)



dat["datetime"] = pd.to_datetime(dat["Date"] + " " + dat["Time"])

dat["Global_active_power"] = pd.to_numeric(dat["Global_active_power"],errors='coerce')
dat.dropna(subset=['Global_active_power'], inplace = True)

f = dat.hvplot.scatter(x = "datetime", y = "Global_active_power",
                       groupby = [], title = "Global_active_power Vs datetime",
                   datashade=True)
hvplot.show(f)

dat.to_parquet("power.parquet")

