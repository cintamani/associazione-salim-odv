module Admin
  class SponsoreesController < ApplicationController
    before_action :set_sponsoree, only: %i[ show edit update destroy ]
    before_action :authenticate_founder!

    # GET /admin/sponsorees or /admin/sponsorees.json
    def index
      @sponsorees = Sponsoree.all
    end

    # GET /admin/sponsorees/1 or /admin/sponsorees/1.json
    def show
    end

    # GET /admin/sponsorees/new
    def new
      @sponsoree = Sponsoree.new
    end

    # GET /admin/sponsorees/1/edit
    def edit
    end

    # POST /admin/sponsorees or /admin/sponsorees.json
    def create
      @sponsoree = Sponsoree.new(sponsoree_params)

      respond_to do |format|
        if @sponsoree.save
          format.html { redirect_to admin_sponsoree_url(@sponsoree), notice: "Sponsoree was successfully created." }
          format.json { render :show, status: :created, location: @sponsoree }
        else
          format.html { render :new, status: :unprocessable_entity }
          format.json { render json: @sponsoree.errors, status: :unprocessable_entity }
        end
      end
    end

    # PATCH/PUT /admin/sponsorees/1 or /admin/sponsorees/1.json
    def update
      respond_to do |format|
        if @sponsoree.update(sponsoree_params)
          format.html { redirect_to admin_sponsoree_url(@sponsoree), notice: "Sponsoree was successfully updated." }
          format.json { render :show, status: :ok, location: @sponsoree }
        else
          format.html { render :edit, status: :unprocessable_entity }
          format.json { render json: @sponsoree.errors, status: :unprocessable_entity }
        end
      end
    end

    # DELETE /admin/sponsorees/1 or /admin/sponsorees/1.json
    def destroy
      @sponsoree.destroy!

      respond_to do |format|
        format.html { redirect_to sponsorees_url, notice: "Sponsoree was successfully destroyed." }
        format.json { head :no_content }
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_sponsoree
        @sponsoree = Sponsoree.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def sponsoree_params
        params.require(:sponsoree).permit(:name, :surname, :date_of_birth, :notes, :emergency_fund, images: [])
      end
  end
end
