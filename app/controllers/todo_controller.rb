class TodoController < ApplicationController
    layout 'todo'

    def index
        @todo_props = { name: "Stranger" }
    end

    def create
        
    end
end
