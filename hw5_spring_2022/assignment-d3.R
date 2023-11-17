library(arrow)
library(r2d3)
library(dplyr)

dat = arrow::read_parquet("power.parquet")

dat$Date <- as.Date(dat$Date,format = "%d/%m/%Y")

dat2 = dat %>% group_by(Date) %>% 
  summarise(Global_active_power = sum(Global_active_power),
            .groups = 'drop')
  

