class Stock < ApplicationRecord

	def self.find_by_ticker(ticker_symbol)
		where(ticker:ticker_symbol).first	
	
	end

	def self.find_by_ticker_name(ticker_symbol)
		quotes = YahooFinance::get_standard_quotes( ticker_symbol) 
		quotes
	end

	def self.new_from_lookup(ticker_symbol)
		look_up_stock = YahooFinance::get_standard_quotes( ticker_symbol)[ticker_symbol]
		return  nil  unless look_up_stock

		new_stock = Stock.new(ticker:look_up_stock.symbol,name:look_up_stock.name)
		new_stock.last_price = look_up_stock.lastTrade
		
		new_stock
		# look_up_stock = StockQuote::Stock.quote(ticker_symbol)
		# return nil unless look_up_stock
			
		# new_stock = new(ticker:look_up_stock.symbol,name:look_up_stock.name)
		# new_stock.last_price = look_up_stock.price
		# new_stock
	end	

	def price
		closing_price = YahooFinance::get_standard_quotes( ticker )[ticker].lastTrade 
		return "#{closing_price} (closing)" if closing_price 

		opening_price = YahooFinance::get_standard_quotes( ticker)[ticker].open 
		return "#{opening_price} (opening)" if opening_price
		"Unavaliable"
	end
end
