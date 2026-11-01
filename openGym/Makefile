# ==============================================================================
# openGym Makefile
# ==============================================================================

SHELL := /bin/bash
MAKEFLAGS += --no-print-directory
DOCKER_COMPOSE ?= docker compose

# Colors for terminal output
CYAN   := \033[36m
GREEN  := \033[32m
YELLOW := \033[33m
RED    := \033[31m
RESET  := \033[0m
BOLD   := \033[1m

.DEFAULT_GOAL := help

.PHONY: help dev up down stop restart logs ps status build test clean install-local dev-local seed

help: ## Hiển thị hướng dẫn các lệnh
	@echo -e "$(BOLD)$(CYAN)openGym - Danh sách lệnh khả dụng:$(RESET)"
	@echo ""
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  \033[32m%-15s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)
	@echo ""

dev: ## Khởi động openGym bằng Docker và in rõ ràng đường dẫn Admin & User
	@$(MAKE) up

seed: ## Nạp dữ liệu mẫu (Workouts, Routines, Bodyweight, Measurements) cho Admin & User
	@echo -e "$(CYAN)🌱 Đang nạp dữ liệu mẫu cho tài khoản Admin và User...$(RESET)"
	@node scripts/seed-data.mjs

up: ## Khởi động các container Docker ở chế độ chạy ngầm
	@if [ ! -f .env ]; then \
		echo -e "$(YELLOW)ℹ️  Chưa tìm thấy file .env, đang tạo tự động từ .env.example...$(RESET)"; \
		cp .env.example .env; \
		sed -i 's/#   FIRST_USER_ADMIN=1/FIRST_USER_ADMIN=1/' .env; \
		sed -i 's/#   PASSWORD_LOGIN=1/PASSWORD_LOGIN=1/' .env; \
	fi
	@mkdir -p data coach-auth
	@echo -e "$(CYAN)🚀 Đang khởi động openGym containers...$(RESET)"
	@$(DOCKER_COMPOSE) up -d
	@echo ""
	@echo -e "$(GREEN)$(BOLD)============================================================$(RESET)"
	@echo -e "$(GREEN)$(BOLD)             🎉 openGym ĐÃ SẴN SÀNG HOẠT ĐỘNG!              $(RESET)"
	@echo -e "$(GREEN)$(BOLD)============================================================$(RESET)"
	@echo ""
	@echo -e "🌐 $(BOLD)Trang chủ / Đăng nhập:$(RESET) $(CYAN)$(BOLD)http://localhost:8080$(RESET)"
	@echo -e "   (Bấm 'Sign in with password' để đăng nhập bằng tài khoản bên dưới)"
	@echo ""
	@echo -e "👑 $(BOLD)$(YELLOW)GIAO DIỆN ADMIN WEB:$(RESET)"
	@echo -e "   📍 Đường dẫn trực tiếp: $(CYAN)$(BOLD)http://localhost:8080/#/admin$(RESET)"
	@echo -e "   🔑 Tên đăng nhập:       $(GREEN)$(BOLD)admin$(RESET)"
	@echo -e "   🔒 Mật khẩu:            $(GREEN)$(BOLD)Admin@OpenGym2026$(RESET)"
	@echo -e "   🛠️  Tính năng:           Quản trị thành viên, xem buổi tập trực tiếp (Live),"
	@echo -e "                           tạo invite code, cấu hình AI Coach, xem audit log."
	@echo ""
	@echo -e "👤 $(BOLD)$(CYAN)GIAO DIỆN USER WEB:$(RESET)"
	@echo -e "   📍 Đường dẫn trực tiếp: $(CYAN)$(BOLD)http://localhost:8080/#/home$(RESET)"
	@echo -e "   🔑 Tên đăng nhập:       $(GREEN)$(BOLD)user$(RESET)"
	@echo -e "   🔒 Mật khẩu:            $(GREEN)$(BOLD)User@OpenGym2026$(RESET)"
	@echo -e "   🏋️  Tính năng:           Kế hoạch tập (Plan), Màn hình tập trực tiếp (Workout),"
	@echo -e "                           Thống kê & Nhóm cơ (Stats), Thư viện bài tập (Library)."
	@echo ""
	@echo -e "$(BOLD)============================================================$(RESET)"
	@echo -e "📋 Xem log server:   $(YELLOW)make logs$(RESET)"
	@echo -e "🌱 Nạp lại dữ liệu:  $(YELLOW)make seed$(RESET)"
	@echo -e "🛑 Dừng hệ thống:    $(YELLOW)make down$(RESET)"
	@echo -e "$(BOLD)============================================================$(RESET)"
	@echo ""

down: ## Dừng toàn bộ containers
	@echo -e "$(YELLOW)🛑 Đang dừng openGym containers...$(RESET)"
	@$(DOCKER_COMPOSE) down
	@echo -e "$(GREEN)✅ Đã dừng tất cả containers.$(RESET)"

stop: ## Dừng toàn bộ containers (alias của down)
	@$(MAKE) down

restart: ## Khởi động lại các container
	@echo -e "$(CYAN)🔄 Đang khởi động lại openGym...$(RESET)"
	@$(DOCKER_COMPOSE) restart
	@echo -e "$(GREEN)✅ Đã khởi động lại xong.$(RESET)"

logs: ## Xem log thời gian thực (nhấn Ctrl+C để thoát)
	@$(DOCKER_COMPOSE) logs -f

ps: ## Xem trạng thái các container
	@$(DOCKER_COMPOSE) ps

status: ## Xem trạng thái các container (alias của ps)
	@$(MAKE) ps

build: ## Build lại Docker images từ mã nguồn và khởi động
	@if [ ! -f .env ]; then cp .env.example .env; fi
	@mkdir -p data coach-auth
	@echo -e "$(CYAN)🔨 Đang build lại Docker images từ mã nguồn...$(RESET)"
	@$(DOCKER_COMPOSE) up -d --build
	@echo -e "$(GREEN)✅ Build và khởi động lại thành công!$(RESET)"

install-local: ## Cài đặt dependencies cục bộ cho frontend và api
	@echo -e "$(CYAN)📦 Cài đặt dependencies cho API...$(RESET)"
	@cd api && npm install
	@echo -e "$(CYAN)📦 Cài đặt dependencies cho Frontend...$(RESET)"
	@cd frontend && npm install

dev-local: ## Chạy phát triển local không qua Docker (API + Vite dev server)
	@if [ ! -d "api/node_modules" ] || [ ! -d "frontend/node_modules" ]; then \
		echo -e "$(YELLOW)Chưa cài đủ dependencies, đang chạy make install-local...$(RESET)"; \
		$(MAKE) install-local; \
	fi
	@mkdir -p data
	@echo -e "$(GREEN)🚀 Chạy API (port 3000) và Vite Dev (port 5173)...$(RESET)"
	@(trap 'kill 0' SIGINT; \
		PORT=3000 DATA_DIR=./data node api/server.js & \
		cd frontend && npm run dev)

clean: ## Dọn dẹp containers và networks
	@echo -e "$(RED)⚠️  Dừng và dọn dẹp các containers...$(RESET)"
	@$(DOCKER_COMPOSE) down
	@echo -e "$(GREEN)✅ Dọn dẹp hoàn tất.$(RESET)"
