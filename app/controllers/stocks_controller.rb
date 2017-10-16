class StocksController < ApplicationController
	def search 
		if params[:stock]
			@stock = Stock.find_by_ticker(params[:stock])
			@stock ||= Stock.new_from_lookup(params[:stock])
		end

		if @stock
			render partial: 'lookup'  
			#this is important 在ajax请求成功之后,在重新渲染 lookup
		else
			render 'not_found'			
		end

	end

end